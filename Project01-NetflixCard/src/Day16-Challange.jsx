function Profile() {
  return (
    <div>
      <ProfileCard
        name="Aditya"
        age="25"
        greeting={
            <div>
                <strong>
                    Hello Aditya, Keep up the great work!
                </strong>
            </div>
        }
        hobbies="Coding"
      >
        <p>Hobbies: Gaming, Earning</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  )
}

export default Profile

function ProfileCard ({name, age, greeting, children}) {
    return <>
        <h1>Name: {name}</h1>
        <p>Age: {age}</p>
        <p>{greeting}</p>
        <div>{children}</div>
    </>
}