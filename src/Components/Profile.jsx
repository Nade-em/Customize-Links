import "./Signup.css"
function Profile(props) {
    const { name, imgurl, bio } = props;

    return (
        <div className="profile-card">

            <div className="img-container">
                <img src={imgurl} />
            </div>
            <div>
                <h4>Hi i'm {name}</h4>
                <p>{bio}</p>
            </div>
        </div>
    )
}
export default Profile;