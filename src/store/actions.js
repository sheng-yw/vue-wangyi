import {reqDataHome, reqDataType} from '../api'
import {
  UPDATE_SELECTION_LIST,
  UPDATE_DIRECT_SUPPLY_LIST,
  UPDATE_BANNER_LIST,
  UPDATE_TYPE_LIST
} from './mutations-type'

export default {

  async getHomeDate ({commit}) {
    const {data} = await reqDataHome();
    commit(UPDATE_DIRECT_SUPPLY_LIST, {directSupplyList: data.tagList});
    commit(UPDATE_BANNER_LIST, {bannerList : data.focusList});
    commit(UPDATE_SELECTION_LIST, {selectionList: data.topicList});
    return data;
  },
  async getTypeData ({commit}) {
    const {data} = await reqDataType();
    commit(UPDATE_TYPE_LIST,{typeList: data})
  }
}
