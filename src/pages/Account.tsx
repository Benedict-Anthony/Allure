import React, { useEffect } from 'react'
import Profile from '../components/Profile'
import Orders from '../components/Orders'
import Address from '../components/Address'
import Reviews from '../components/Reviews'
import Settings from '../components/Settings'
import { useUserContext } from '../contexts/UserAndCartContext'
import Bookings from '../components/Bookings'


const Account = () => {
    const { isNotAuthenticated, } = useUserContext()


    useEffect(() => {
        isNotAuthenticated()
    }, []) // eslint-disable-line
    return (
        <main className="container section">
            <Profile
                orders={Orders}
                address={Address}
                reviews={Reviews}
                setttings={Settings}
                bookings={Bookings}
            />
        </main>
    )
}

export default Account
