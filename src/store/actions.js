import {reqDataHome, reqDataType, reqDistinctionData} from '../api'
import {
  UPDATE_SELECTION_LIST,
  UPDATE_DIRECT_SUPPLY_LIST,
  UPDATE_BANNER_LIST,
  UPDATE_TYPE_LIST,
  UPDATE_POLICY_DESC_LIST,
  UPDATE_POPULAR_LIST,
  UPDATE_GOODS_LIST,
  UPDATE_GOOD_TYPE,
  UPDATE_DISTINCTION_DATA,
  UPDATE_SHADE_SHOW
} from './mutations-type'

export default {

  async getHomeDate ({commit},cb) {
    const {data} = await reqDataHome();
    commit(UPDATE_DIRECT_SUPPLY_LIST, {directSupplyList: data.tagList});
    commit(UPDATE_BANNER_LIST, {bannerList : data.focusList});
    commit(UPDATE_SELECTION_LIST, {selectionList: data.topicList});

    commit(UPDATE_GOODS_LIST, {newGoodsList: data.newItemNewUserList});
    commit(UPDATE_GOOD_TYPE, {goodTypes: data.cateList});
    commit(UPDATE_POLICY_DESC_LIST, {policyDescList: data.policyDescList});
    commit(UPDATE_POPULAR_LIST, {popularList: data.popularItemList});
    typeof cb === 'function' && cb();
  },
  async getTypeData ({commit}) {
    const {data} = await reqDataType();
    commit(UPDATE_TYPE_LIST,{typeList: data.categoryL1List})
  },
  async getDistinctionData ({commit}) {
    const {data} = await reqDistinctionData();
    commit(UPDATE_DISTINCTION_DATA, {distinctionData: data})
  },
  closeShade({commit}) {
    commit(UPDATE_SHADE_SHOW)
  }
}
