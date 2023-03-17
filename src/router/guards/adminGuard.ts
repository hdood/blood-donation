import useAdminAuthStore from  '@/stores/admin/auth'
import { storeToRefs } from 'pinia'

export default () => {

    // TODO : activate the guard by removing the return statement
    
    return

    const { authenticated } = storeToRefs(useAdminAuthStore())

    if(!authenticated.value) {
        return { name : 'home'}
    }

    return true
}