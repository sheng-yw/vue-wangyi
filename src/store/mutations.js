import {
  UPDATE_BANNER_LIST,
  UPDATE_DIRECT_SUPPLY_LIST,
  UPDATE_SELECTION_LIST,
  UPDATE_TYPE_LIST
} from './mutations-type'
export default {
  [UPDATE_BANNER_LIST] (state,{bannerList}) {
    state.bannerList = bannerList;
  },
  [UPDATE_DIRECT_SUPPLY_LIST] (state, {directSupplyList}) {
    state.directSupplyList = directSupplyList;
  },
  [UPDATE_SELECTION_LIST] (state, {selectionList}) {
    state.selectionList = selectionList;
  },
  [UPDATE_TYPE_LIST] (state, {typeList}){
    state.typeList = typeList
  }
}
