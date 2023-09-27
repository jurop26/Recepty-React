import React from 'react'
import './App.css';
import RecepiesList from './RecepiesList';
import RecepieEditForm from './RecepieEditForm';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recepiesList:
        [
          {
            name: 'Pecene kura',
            cookTime: '1.45',
            servings: 1,
            instructions: '1.Vhodte kura do truby',
            ingredients: [{name: 'kura', amount: '2kg'},{name: 'sol', amount: '1 dcl'}]
          },
          {
            name: 'Bravcove',
            cookTime: '1.45',
            servings: 2,
            instructions: 'Nakrajat a hodit do truby',
            ingredients: [{name: 'bravcove', amount: '1kg'}]
          }
        ],
        selectedRecepie: 0,

        initialList: {
          name: '',
          cookTime: '',
          servings: '',
          instructions: '',
          ingredients: []
        }
      }
      
      this.handleRemoveRecepie = this.handleRemoveRecepie.bind(this)
      this.handleAddRecepie = this.handleAddRecepie.bind(this)
      this.handleChanges = this.handleChanges.bind(this)
      this.handleEditButton = this.handleEditButton.bind(this)
    }

    componentDidMount(){
      const selectedRecepie = this.state.selectedRecepie
      document.querySelectorAll('.single-recepie')[selectedRecepie].style.backgroundColor = 'lightgreen'
    }
    
    componentDidUpdate() {
      const recepies = document.querySelectorAll('.single-recepie')
      const index = this.state.selectedRecepie
      recepies.forEach(recepie => recepie.style.backgroundColor = 'inherit')
      document.querySelectorAll('.single-recepie')[index].style.backgroundColor = 'lightgreen'
    }
  // LOCAL_STORAGE_KEY = 'cookingWithReact.newRecepie'
  // // componentDidMount(){this.saveToLocalStorage('cookingWithReact.recepiesList', this.state.recepiesList)}

  // saveToLocalStorage(localStorageKey, data) {
  //   localStorage.setItem(localStorageKey, JSON.stringify(data))
  // }

  // getFromLocalStorage(localStorageKey) {
  //   return localStorage.getItem(localStorageKey)
  // }

  handleChanges(changes) {
    const recepies = [...this.state.recepiesList]
    const selectedRecepie = this.state.selectedRecepie
    recepies[selectedRecepie] = changes
    this.setState({recepiesList: recepies})
    // this.props.saveToLocalStorage(this.props.LOCAL_STORAGE_KEY, this.state)
  }

  handleEditButton(index) {
    this.setState({selectedRecepie: index})
  }

  handleAddRecepie(){
    const recepie = this.state.initialList
    this.setState({recepiesList: [...this.state.recepiesList, recepie]})
  }

  handleRemoveRecepie(index){
    const recepiesList = [...this.state.recepiesList]
    const initialList = this.state.initialList
    const filteredRecepieList = recepiesList.filter((recepie, i) => {return index !== i})
    const recepies = filteredRecepieList.length > 0 ? filteredRecepieList : [...filteredRecepieList, initialList]

    this.setState({selectedRecepie: 0, recepiesList: recepies})
  }

  render() {
    return (
      <div className='divbox'>
        <div className='div-left'>
          <RecepiesList 
            recepiesList={this.state.recepiesList} 
            removeRecepie={this.removeRecepie} 
            handleAddRecepie={this.handleAddRecepie}
            handleRemoveRecepie={this.handleRemoveRecepie}
            handleEditButton={this.handleEditButton}
          /> 
        </div>
      
        <div className='div-right'>
          <RecepieEditForm  
            handleChanges={this.handleChanges} 
            selectedRecepie={this.state.recepiesList[this.state.selectedRecepie]}
          />
        </div>
        
      </div>
    )
  }
}

export default App;
