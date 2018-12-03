import {
  UPDATE_BANNER_LIST,
  UPDATE_DIRECT_SUPPLY_LIST,
  UPDATE_SELECTION_LIST,
  UPDATE_TYPE_LIST,
  UPDATE_GOODS_LIST,
  UPDATE_GOOD_TYPE,
  UPDATE_POLICY_DESC_LIST,
  UPDATE_POPULAR_LIST,
  UPDATE_DETAIL
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
  },
  [UPDATE_GOOD_TYPE] (state, {goodTypes}){
    state.goodTypes = goodTypes
  },
  [UPDATE_GOODS_LIST] (state, {newGoodsList}){
    state.newGoodsList = newGoodsList
  },
  [UPDATE_POPULAR_LIST] (state, {popularList}){
    state.popularList = popularList
  },
  [UPDATE_POLICY_DESC_LIST] (state, {policyDescList}){
    state.policyDescList = policyDescList
  },
  [UPDATE_DETAIL] (state, {detail}){
    state.detail = detail
  }
}
