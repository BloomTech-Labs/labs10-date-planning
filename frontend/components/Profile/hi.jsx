const hi = () => {
return (<div
          className="prof-img"
            style={{ backgroundImage: `url(${currentUser.imageLarge})` }}
            />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h2>
                    {currentUser.firstName} | {getAge(currentUser.dob)}
                  </h2>
                  <Location user={currentUser} />
                </div>)
}