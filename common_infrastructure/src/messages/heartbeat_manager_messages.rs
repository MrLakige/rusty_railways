use serde::{Deserialize,Serialize};
use crate::devices::Device;

#[derive(Clone, Copy, PartialEq, Eq, Debug, Deserialize, Serialize)]
pub enum HeartBeatManagerMessage {
    HeartBeatFrom(Device), // train or swith
    HeartBeatFromMaster,
    EnableMasterHerrtBeatCheck,
    DisableMasterHerrtBeatCheck,
}