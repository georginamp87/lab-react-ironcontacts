import React, { Component } from 'react'
import contactsJson from '../contacts.json' 
import ContactDetails from '../components/ContactDetails.js'

class Contacts extends Component {

    state = {
        contacts: contactsJson.slice(0,5)
    }

    handleAdd = () => {
        let randomIndex = Math.floor(Math.random() * contactsJson.length)
        let randomContact = contactsJson[randomIndex]

        this.setState({
            contacts: [...this.state.contacts, randomContact]
        })
    }

    handleSort = () => {
        let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts))
        clonedContacts.sort((a, b)=> {
                if (a.name > b.name) {
                    return 1
                }
                else if (a.name < b.name) {
                    return -1
                }
                else {
                    return 0
                }
            })
            this.setState({
                contacts: clonedContacts
            })
    }

    handleSortPop = () => {
        let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts))
        clonedContacts.sort((a, b)=> {
                if (a.popularity > b.popularity) {
                    return -1
                }
                else if (a.popularity < b.popularity) {
                    return 1
                }
                else {
                    return 0
                }
            })
            this.setState({
                contacts: clonedContacts
            })
    }

    handleDelete = (contactId) => {
        let filteredContacts = this.state.contacts.filter((singleContact) => {
            return singleContact.id !== contactId
        } )
        this.setState({
            contacts : filteredContacts
        })
    }

    render() {
        return (
            <div>
              <button onClick={this.handleAdd}>Add Random Contact</button>
              <button onClick={this.handleSort}>Sort by Name</button>
              <button onClick={this.handleSortPop}>Sort by Popularity</button>
               <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    {
                   this.state.contacts.map((singleContact, index) => {
                       return <ContactDetails 
                       key={index} 
                       id={singleContact.id}
                       picture={singleContact.pictureUrl}
                       name={singleContact.name} 
                       popularity={singleContact.popularity.toFixed(2)}
                       onDelete={this.handleDelete}
                       />
                   })
               }
                    </tr>
                </tbody>
              </table>
            </div>
        )
    }
}

export default Contacts