import React, { useCallback, useState } from 'react';
import Button from './Button';
import DataCount from './DataCount';
import Title from './Title';


function ParentComp() {
    const [age, setAge] = useState(10)
    const [salary, setSalary] = useState(11000)

    //Return the memorized function
    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])
    const incremetnSalary = useCallback(() => {
        setSalary(salary + 1)
    }, [salary])
    return <div>
        <Title />
        <DataCount count={age} text='Age' />
        <Button handleClick={incrementAge}>Increment Age</Button>
        <DataCount count={salary} text='Salary' />
        <Button handleClick={incremetnSalary}>Increment Salry</Button>
    </div>;
}

export default ParentComp;
