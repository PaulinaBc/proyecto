function navbar() {
    return
    <CNavbar colorScheme="light" className="bg-light">
        <CForm className="container-fluid">
            <CInputGroup>
                <CInputGroupText id="basic-addon1">@</CInputGroupText>
                <CFormInput placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </CInputGroup>
        </CForm>
    </CNavbar>
   
}