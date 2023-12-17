function InputCard({title, content}){
    return(
        <div>
            <h3>{title}</h3>
            <form>
        {content}
        </form>
        </div>
    )
}

function HeaderContent({updateInfo}){

    const handleChange = (e)=>{
        updateInfo(e.target.id, e.target.value);
    }

    return(
        <>
        <label htmlFor='name'>Full Name:</label>
        <input type="text" id='name' placeholder='Enter Full Name...' onChange={handleChange}/>
        <label htmlFor="email">Email:</label>
        <input type="email" id='email' placeholder="Enter Email..." onChange={handleChange}/>
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id='phone' placeholder="Enter Phone Number..." onChange={handleChange}/>
        </>
    )
}

function Builder({updateInfo}){
    return (
        <section>
            <h2 className="hidden">Personal Info</h2>
            <InputCard title='Header' content={<HeaderContent updateInfo={updateInfo}/>}/>
            {/* <InputCard title='Education'/>
            <InputCard title='Experience'/> */}
        </section>
    )
}

export default Builder;