function Expresiones() {
    const nombre='Jenny'
    const apellidos='Canales'
    return(
        <div>
            <h2>Expresiones</h2>
            <h3>Mi nombre es{nombre} y mis apellidos son {apellidos}</h3>
            <Lista/>
            </div>
    )
}

function Lista(){
    const users=[
        {id:1, name: 'JENN', role: 'Web Developer'},
        {id:2, name: 'ALFONSO', role: 'Frontend Developer'},
        {id:3, name: 'RGADIEL', role: 'Backend Developer'}
        ]
    return(
        
        <div>
            <table>
                <tbody>
                    <tr>

                    <th>Name</th>
                    <th>Role</th>
                    </tr>
                    
                        {users.map(function(user,index){
                            return(
                                <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                            </tr>)
                        }) 
                        }
                    
                </tbody>
            </table>
        </div>
    );
}

export default Expresiones