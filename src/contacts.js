import React, { Component } from 'react';
import Contact from './contact';




export default class ContactsClass extends Component {
    state = {
        contacts: [{
            firstName: "Барней",
            lastName: "Стинсовский",
            phone: "+380956319521",
            gender: "male"
        }, {
            firstName: "Робин",
            lastName: "Щербатская",
            phone: "+380931460123",
            gender: "female"
        }, {
            firstName: "Аномный",
            lastName: "Анонимус",
            phone: "+380666666666"
        }, {
            firstName: "Лилия",
            lastName: "Олдровна",
            phone: "+380504691254",
            gender: "female"
        }, {
            firstName: "Маршэн",
            lastName: "Эриксонян",
            phone: "+380739432123",
            gender: "male"
        }, {
            firstName: "Теодор",
            lastName: "Мотсбэс",
            phone: "+380956319521",
            gender: "male"
        }],
        filter: '',
        value: '',
        male: true,
        female: true,
        undefine: true
      }
      
      changeFilter = (event) =>{
        this.setState({filter: event.target.value})
      }
      
      settingsGender = (event) => {
        this.setState({
          [event.target.name]: event.target.checked
        });
      };
      
      
      render(){
        const { filter, female, male, undefine } = this.state;
        const regex= new RegExp(this.state.filter, 'g');
        
        const data = this.state.contacts.filter((item)=>(regex.test(item.lastName)||
        regex.test(item.firstName)||regex.test(item.phone)) && 
        (item.gender ? (female && item.gender === "female") || (male && item.gender === "male") : undefine));
        
        
        return(
        <div className="Container">
          <div className="Header">
            <input className="Input" size="30" onChange={this.changeFilter} value={filter} height="0px" placeholder="Search..."/>
            <div>
            <label className="checkbox-label">
              <input type="checkbox" id="male" className="checkbox" onChange={this.settingsGender} name="male" checked={male}/><span>Male</span>
              <input type="checkbox" id="famale" className="checkbox" onChange={this.settingsGender} name="female" checked={female}/><span>Female</span>
              <input type="checkbox" id="undefine" className="checkbox" onChange={this.settingsGender} name="undefine" checked={undefine}/><span>Undefine</span>
            </label>
            </div>
          </div>
          <div className="Contact">
          {
           data.length ?
           data.map((item,index) => (
           <Contact key={index+item}
           firstName={item.firstName}
           lastName={item.lastName}
           phone={item.phone}
           gender={item.gender} 
           />)) : <p>NO DATA</p>
            }
          </div>
        </div>
        )
    }
}