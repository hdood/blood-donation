import useAdminAuthStore from  '@/stores/admin/auth'
import { storeToRefs } from 'pinia'

export default () => {
	return
    const { authenticated } = storeToRefs(useAdminAuthStore())

    if(!authenticated.value) {
        return { name : 'admin-login'}
    }

    return true
}
