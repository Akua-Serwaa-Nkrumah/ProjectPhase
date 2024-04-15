import React from 'react'
import './UserProfileCard.css'
import profile_icon from '../Assets/mariaClara.jpg'

const UserProfileCard = () => {
    return (
        <div className='upc'>
            <div className="gradient"></div>
            <div className="profile-down">
                <img src={profile_icon} alt="" />
                <div className="profile-title" >Akua Nkrumah</div>
                <div className="profile-description">

                    <div className='text-box' style={{ textAlign: 'justify' }}>

                        <p>In the depths of shadows, a girl resides,</p>

                        <p>A tapestry woven with secrets she hides.
                            Beauty and ugliness entwined within,
                            Sorrow and joy, a complex origin.</p>

                        <p>A yearning to conquer, dreams held so tight,
                            Yet empty hands bear no evidence in sight.
                            Oh, Lord, lend your guidance, your divine embrace,
                            For in this tangled web, I seek solace and grace.</p>

                        <p>Whispers float in silence, do they reach an ear?
                            Is there a listener, a presence near?
                            In the depths of longing, the plea rings true,
                            A soul seeking solace, reaching out to you.</p>
                    </div>
                </div>
                <button className="profile-button"><a href="mailto:akua@a2sv.org">Contact Mail</a></button>
            </div>

        </div>
    )
}

export default UserProfileCard
