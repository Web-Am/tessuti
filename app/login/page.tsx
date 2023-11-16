export default function Page() {
    return <div className="min-vh-100 bg-light">
        <div className="container" style={{ paddingTop: '6%' }}>
            < main className="form-signin text-center" >
                <form >
                    <img className="mb-4" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Accedi</h1>

                    <div className="form-floating mb-4">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label >Email</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label >Password</label>
                    </div>

                    <a href="/dashboard" className="w-100 btn btn-lg btn-primary" type="submit">Accedi</a>
                    <h6 className="text-muted fs-italic">finto login - premere il btn</h6>
                    <p className="mt-5 mb-3 text-muted">© 2023 - Silvia</p>
                </form>
            </main >
        </div >
    </div >
}