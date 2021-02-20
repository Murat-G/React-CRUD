import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext,useState} from 'react';

const UpdateForm = ({myEmployee}) => {
    const { updateEmployee } = useContext(EmployeeContext);

    const employee = myEmployee;
    const id = employee.id;
    
    const [lastEmployee, setLastEmployee] = useState({
        name:employee.name, email: employee.email, address: employee.address, phone: employee.phone
    })
    
    const {name, email, address, phone } = lastEmployee;
    
    const sendNewEmployee = {id, name, email, address, phone};


    const onUpdateChange = (e) => {
        setLastEmployee({...lastEmployee, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, sendNewEmployee);
    }

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    required 
                    value={name}
                    onChange={(e)=> onUpdateChange(e)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    required 
                    value={email}
                    onChange={(e)=> onUpdateChange(e)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address *"
                    name="address"
                    rows={3} 
                    value={address}
                    onChange={(e)=> onUpdateChange(e)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={(e)=> onUpdateChange(e)}
                />
            </Form.Group>

            <Button variant="success" type="submit" block>
                Update Employee
            </Button>
        </Form>
    )
}

export default UpdateForm; 