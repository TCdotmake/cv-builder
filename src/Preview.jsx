function GeneralInfo({cv}){
    return (
        <div>
            <h3 className="hidden">General Info</h3>
            <p>{cv.name}</p>
            <p>{cv.email}</p>
            <p>{cv.phone}</p>
        </div>
    )
}

function Preview({cv}){
    return (
        <section>
        <h2 className="hidden">Preview</h2>
        <GeneralInfo cv={cv}/>
        </section>
    )
}

export default Preview;