import recordStore from '@/store/recordStore';
import tagListStore from '@/store/tagListStore';

const store = {
    ...recordStore,
    ...tagListStore
}

export default store