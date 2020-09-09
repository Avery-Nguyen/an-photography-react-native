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
    fontSize: 100,
  },
  toggleTitle: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 70,
  },
  toggleNav: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 70,
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
    borderTopWidth: 2,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    borderStyle: 'solid',
  },
  contentText: {
    fontSize: 30,
  }
});

export {styles};