var searchIndex = JSON.parse('{\
"master":{"doc":"","t":"RRGFAAAFAFDLLMLLLAMLLLLLLLLLDMLLLLLMLLLLLDNNENLLLLLLOLLLLLLLLMLLLLLLLLLLOLLMMMMDLLLMLMLLLLLLLDLLLLLLMLMLMMAMLMLLLLDLLLLLLLCCCLLLLLAAAAAMMLLLLFFFFF","n":["DEFAULT_STRAIGHT_SPEED","DEFAULT_UPHILL_SPEED","Hal","get_map","hal","high_level_controller","low_level_controller","main","path_finder_and_scheduler","run","MasterHalRaspberryPi","borrow","borrow_mut","client","from","get_message","into","message_getter","message_receiver","new","send_message_to_switch","send_message_to_train","send_message_to_url","sleep_for_ms","try_from","try_into","type_id","vzip","MessageReceiver","_pd","borrow","borrow_mut","from","into","new","rx","try_from","try_get_message","try_into","type_id","vzip","HighLevelController","LockTrain","MoveTrain","Request","UnlockTrain","borrow","borrow","borrow_mut","borrow_mut","clone","clone_into","convert_id_or_return","deserialize","eq","equivalent","equivalent","fmt","from","from","get_request","incoming_requests","into","into","new","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","unwrap_or_return","vzip","vzip","destination","train_id","train_id","train_id","LowLevelController","borrow","borrow_mut","from","hal","into","map_controller","move_train","move_train_wrapper","new","try_from","try_into","type_id","vzip","PathFinderAndScheduler","add_request","borrow","borrow_mut","execute_move_request","execute_request","execute_requests","factory","from","hal","into","low_level_controller","map_controller","map_navigation_functions","map_visualization","new","requests","try_from","try_into","type_id","vzip","OrderedPosition","borrow","borrow_mut","cmp","compare","eq","equivalent","equivalent","find_path_to_intersection","find_path_to_move_out_of_the_way","find_path_to_position","fmt","from","into","new","partial_cmp","path_finder","path_to_intersection","path_to_move_out_of_the_way","path_to_position","path_to_switch_point","position","priority","try_from","try_into","type_id","vzip","find_best_path","find_path_to_intersection","find_path_to_move_out_of_the_way","find_path_to_position","find_path_to_switch_point"],"q":["master","","","","","","","","","","master::hal","","","","","","","","","","","","","","","","","","master::hal::message_getter","","","","","","","","","","","","","master::high_level_controller","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","master::high_level_controller::Request","","","","master::low_level_controller","","","","","","","","","","","","","","master::path_finder_and_scheduler","","","","","","","","","","","","","","","","","","","","","master::path_finder_and_scheduler::map_navigation_functions","","","","","","","","","","","","","","","","","","","","","","","","","","","master::path_finder_and_scheduler::map_navigation_functions::path_finder","master::path_finder_and_scheduler::map_navigation_functions::path_to_intersection","master::path_finder_and_scheduler::map_navigation_functions::path_to_move_out_of_the_way","master::path_finder_and_scheduler::map_navigation_functions::path_to_position","master::path_finder_and_scheduler::map_navigation_functions::path_to_switch_point"],"d":["","","","","","","","","","","","","","","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","get_request is blocking","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","","","","","","","","","","When a request is added the path finder can either execute …","","","Try to execute a move request, return true if the request …","Try to execute a request, return true if the request was …","Try to execute all the requests in the queue, remove the …","","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","find the best path (in therms of total distance) for a …","return the shortest path from the current position to the …","This function moves a train away from a vector of positions","return the shortest path from the current position to the …","if the train can’t reach is destination directly, and …"],"i":[0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,0,3,3,3,3,3,3,3,3,3,3,0,16,16,16,16,16,16,16,16,16,16,16,16,0,17,17,0,17,21,17,21,17,17,17,0,17,17,17,17,17,21,17,21,21,21,17,21,17,21,17,21,17,21,17,0,21,17,34,34,35,36,0,24,24,24,24,24,24,24,24,24,24,24,24,24,0,26,26,26,26,26,26,26,26,26,26,26,26,0,26,26,26,26,26,26,26,0,29,29,29,29,29,29,29,0,0,0,29,29,29,29,29,0,0,0,0,0,29,29,29,29,29,29,0,0,0,0,0],"f":[0,0,0,[[],[[2,[1]]]],0,0,0,[[]],0,[[],2],0,[[]],[[]],0,[[]],[3,[[2,[[5,[4]]]]]],[[]],0,0,[[],[[2,[3]]]],[[3,6,7],2],[[3,8,9],2],[[3,10,11],2],[[3,12]],[[],13],[[],13],[[],14],[[]],0,0,[[]],[[]],[[]],[[]],[[],[[16,[15]]]],0,[[],13],[[[16,[15]]],[[2,[[5,[15]]]]]],[[],13],[[],14],[[]],0,0,0,0,0,[[]],[[]],[[]],[[]],[17,17],[[]],0,[[],[[13,[17]]]],[[17,17],18],[[],18],[[],18],[[17,19],20],[[]],[[]],[21,[[2,[17]]]],0,[[]],[[]],[22,21],[[]],[[],13],[[],13],[[],13],[[],13],[[],14],[[],14],0,[[]],[[]],0,0,0,0,0,[[]],[[]],[[]],0,[[]],0,[[[24,[23]],8],2],[[[24,[23]],8],2],[[[25,[23]]],[[24,[23]]]],[[],13],[[],13],[[],14],[[]],0,[[[26,[23]],17],[[2,[[27,[17]]]]]],[[]],[[]],[[[26,[23]],8,28],[[2,[18]]]],[[[26,[23]],17],[[2,[18]]]],[[[26,[23]]],[[2,[[27,[17]]]]]],0,[[]],0,[[]],0,0,0,0,[1,[[26,[23]]]],0,[[],13],[[],13],[[],14],[[]],0,[[]],[[]],[[29,29],30],[[],30],[[29,29],18],[[],18],[[],18],0,0,0,[[29,19],20],[[]],[[]],[[12,28],29],[[29,29],[[5,[30]]]],0,0,0,0,0,0,0,[[],13],[[],13],[[],14],[[]],[[8,31,32,33,18],[[2,[[5,[[27,[28]]]]]]]],[[8,32,33],[[2,[[5,[[27,[28]]]]]]]],[[8,27,32,33],[[2,[[5,[[27,[28]]]]]]]],[[8,28,32,33,18],[[2,[[5,[[27,[28]]]]]]]],[[8,28,32,33],[[2,[[5,[[27,[28]]]]]]]]],"p":[[3,"MapFactory"],[6,"Result"],[3,"MasterHalRaspberryPi"],[4,"MasterMessage"],[4,"Option"],[4,"Switch"],[4,"SwitchMessage"],[4,"Train"],[4,"TrainMessage"],[15,"str"],[3,"String"],[15,"u32"],[4,"Result"],[3,"TypeId"],[8,"Deserialize"],[3,"MessageReceiver"],[4,"Request"],[15,"bool"],[3,"Formatter"],[6,"Result"],[3,"HighLevelController"],[3,"MapComunicationSlave"],[8,"MasterHal"],[3,"LowLevelController"],[3,"MapControllerView"],[3,"PathFinderAndScheduler"],[3,"Vec"],[4,"Position"],[3,"OrderedPosition"],[4,"Ordering"],[8,"Fn"],[3,"MapVisualizationView"],[3,"MapNavigationView"],[13,"MoveTrain"],[13,"LockTrain"],[13,"UnlockTrain"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
