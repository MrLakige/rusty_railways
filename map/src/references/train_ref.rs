use crate::{Map,MapStateInitialized};
use crate::devices::TrainController;
use crate::states::{ReferenceStateInitialized, ReferenceState, ReferenceStateUninitialized};
use common_infrastructure::devices::Train;
use serde::{Deserialize, Serialize};
use std::ops::Deref;

pub trait TrainRef: ReferenceState {}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq, Copy, Clone)]
pub struct UnIntiTrainRef{
    pub train: Train
}
impl TrainRef for UnIntiTrainRef{}

impl ReferenceStateUninitialized for UnIntiTrainRef{
    fn initialize(self, map: & Map<MapStateInitialized>) -> Self::InitializedType {
        let train = map.get_train(self.train).unwrap();
        IntiTrainRef{
            train
        }
    }

}
impl ReferenceState for UnIntiTrainRef{
    type InitializedType = IntiTrainRef;
    type UninitializedType = Self;
}
impl From<Train> for UnIntiTrainRef{
    fn from(value: Train) -> Self {
        UnIntiTrainRef{
            train: value
        }
    }
}

#[derive(Debug,Clone,PartialEq,Eq)]
pub struct IntiTrainRef{
    pub train: *const TrainController<MapStateInitialized>
}

impl TrainRef for IntiTrainRef{}

impl Deref for IntiTrainRef{
    type Target = TrainController<MapStateInitialized>;
    fn deref(&self) -> &Self::Target {
        unsafe {&*self.train}
    }
}
impl ReferenceStateInitialized for IntiTrainRef{
    fn un_initialize(self) -> Self::UninitializedType {
        UnIntiTrainRef{
            train: unsafe{(*self.train).train}
        }
    }
}
impl ReferenceState for IntiTrainRef{
    type InitializedType = Self;
    type UninitializedType = UnIntiTrainRef;
}

impl From<&TrainController<MapStateInitialized>> for IntiTrainRef{
    fn from(value: &TrainController<MapStateInitialized>) -> Self {
        IntiTrainRef{
            train: value
        }
    }

}
