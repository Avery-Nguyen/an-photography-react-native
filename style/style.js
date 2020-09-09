import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    
  },
  title: {
    margin: 'auto',
    color: 'white',
  },
  toggleTitle: {
    
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor: 'white'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBorder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: 'white',
    borderTopWidth: '2px',
    borderBottomColor: 'white',
    borderBottomWidth: '2px',
    borderStyle: 'solid',
  }
});

export {styles};