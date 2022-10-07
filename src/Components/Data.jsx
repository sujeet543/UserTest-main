import React, {useState, useEffect} from 'react';
import './data.css';
import axios from 'axios';

const Data = () => {
	
	const [companies, setCmp]= useState([]);
	const urlOfHit='https://demo2211087.mockable.io/mock';

	const reqInput={
		method:'POST',
		url: urlOfHit
	}

	useEffect(()=>{
		axios.request(reqInput)
		.then((res)=>{
			setCmp(res.data.companies);
			console.log({companies})
		})
	}, [])


	return (
		<div className='mainData'>
			<h1>Users</h1>
			<div className="dispSet">
				<div className="dispTitle">Name</div>
				<div className="dispTitle" style={{width:'18vw'}}>Email</div>
				<div className="dispTitle">Status</div>
			</div>

			{
				(companies).map((value)=>{
					return <div key={value.name} className="dispSet">
						<div className="dispData" style={{fontSize:'1.1em'}}>
							{value.name}
						</div>
						<div className="dispData" style={{fontSize: '1em', width:'18vw'}}>
							{value.email}
						</div>
						<div className="dispData" style={{fontSize: '1em', color: value.status==='active'?'green':'red' }} >
							{value.status}
						</div>
					</div>
				})
			}
			
		</div>
	)
}

export default Data