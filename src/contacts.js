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
        event.persist();
        this.setState({
          [event.target.name]: event.target.checked
        });
      };
      
      
      render(){
        const { filter, female, male, undefine } = this.state;
        const regex= new RegExp(this.state.filter, 'i');
        
        const data = this.state.contacts.filter((item)=>(regex.test(item.lastName)||
        regex.test(item.firstName)||regex.test(item.phone)) && 
        (item.gender ? (female && item.gender === "male") || (male && item.gender === "female") : undefine));
        
        
        return(
        <div className="Container">
          <div className="Header">
            <input className="Input" size="30" onChange={this.changeFilter} value={filter} height="0px" placeholder="Search..."/>
            <div>
              <input type="checkbox" id="male" className="checkbox" onClick={this.settingsGender} name="male" checked={male}/><b><span>Male</span></b>
              <input type="checkbox" id="famale" className="checkbox" onClick={this.settingsGender} name="female" checked={female}/><b><span>Female</span></b>
              <input type="checkbox" id="undefine" className="checkbox" onClick={this.settingsGender} name="undefine" checked={undefine}/><b><span>Undefine</span></b>
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
           />)) : <b><p>NO DATA</p></b>
            }
          </div>
        </div>
        )
    }
}