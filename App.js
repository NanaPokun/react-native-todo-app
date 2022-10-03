import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';
import Header from './components/header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/addtodo';
import Sandbox from './components/sandbox';



export default function App() {

    const [ todos, setTodos ] = useState([
      { text: 'Learn react native', key: '1' },
      { text: 'Create todo app', key: '2' },
      { text: 'Document progress', key: '3' },
      { text: 'Watch some match', key: '4' },
    ]);

    const pressHandler = (key) => {
      setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.key != key)
      });
    };

    const submitHandler = (text) => {

      if(text.length > 3) {
          setTodos((prevTodos) => {
          return [
            { text: text, key: Math.random().toString() },
            ...prevTodos
          ];
        });
      } else {
        Alert.alert('MY GUYYY!!', 'Your todo must be more than 3 char long', [
          {text: 'You barb?', onPress: () => console.log('alert closed')}
        ]);
      }
    }
    return (
        // <Sandbox />
        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss();
          console.log('keyboard was disabled');
        }}>
          <View style={styles.container}>
              {/* Header Code or Component Here */}
              <Header />
              <View style={styles.content}>
                {/* ToDo form Here */}
                <AddTodo submitHandler={ submitHandler } />
                <View style={styles.list}>
                    <FlatList 
                        data={todos}
                        renderItem={({ item }) => (
                          <TodoItem item={item} pressHandler={pressHandler} />
                        )}
                    />      
                </View>
              </View>
          </View>
        </TouchableWithoutFeedback>
    ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});


{/* Tutorial setup */}


 // const [students, setStudents] = useState([
  //   { name: 'kevin', id: '1' },
  //   { name: 'joseph', id: '2' },
  //   { name: 'brain', id: '3' },
  //   { name: 'gerald', id: '4' },
  //   { name: 'tsatsu', id: '5' },
  //   { name: 'kersia', id: '6' },
  //   { name: 'isabella', id: '8' },
  //   { name: 'joycelyn', id: '9' },
  // ]);

  // const pressHandler = (id) => {
  //   console.log(id);
  //   setStudents((pastStudents) => {
  //       return pastStudents.filter(student => student.id != id)
  //   })
  // };

  // const [ company, setCompany ] = useState("Space to Learn");
  // const [ stage, setStage ] = useState({ level: 'Basic 7', day: 'Tuesday'});
  // const [ school, setSchool ] = useState('manak');
  // const [ subject, setSubject ] = useState('science');

  // const pressHandler = () => {
  //   setCompany("IncDot");
  //   setStage({ level: 'Basic 6', day: 'Wednesday' });
  // };


 {/* <FlatList 
          numColumns={2}
          keyExtractor={(item) => item.id }
          data={students}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
                <Text style={styles.itemsInList}>{ item.name }</Text>
            </TouchableOpacity>
          )}
        /> */}

{/* <ScrollView>
            { students.map((itemsInList) => {
                return (
                  <View id={itemsInList id} >
                    <Text style={styles.itemsInList}>{itemsInList.name}</Text>
                  </View>
                )
            })}
        </ScrollView> */}

      {/* <Text style={styles.boldTitle}>Hello there! Welcome to { company }</Text>
      <Text>Enter your school : </Text>
      <TextInput 
          multiline
          style= {styles.input} 
          placeholder="e.g. Eden Kids"
          onChangeText={(val) => setSchool(val)}
        />

        <Text>Enter your subject : </Text>
      <TextInput 
          keyboardType='acsii-capable'
          style= {styles.input} 
          placeholder="e.g. science.."
          onChangeText={(val) => setSubject(val)}
        />

      <Text>In {school}, and we have {subject} </Text>  
      <Text>The next lesson would be in { stage.level } on { stage.day } </Text>
      <View style={styles.buttonContainer}>
        <Button title='Update the company' onPress={ pressHandler }/>
      </View> */}

 // <View style={styles.container}>
    //   <View style={styles.header}>
    //     <Text style={styles.boldtext}>Welcome</Text>
    //   </View>
    //   <View style={styles.body}>
    //     <Text style={styles.boldbody}>This is a <Text>React Native</Text> webapp I built</Text>
    //     <Text>This is a webapp I built</Text>
    //     <Text>This is a webapp I built</Text>
    //   </View>
    //   <StatusBar style="auto" />
    // </View>
 // itemsInList: {
  //   marginTop: 25,
  //   padding: 15,
  //   fontSize: 24,
  //   backgroundColor: "cyan",
  //   marginHorizontal: 10,
  //   marginTop: 24  
  // },

// boldTitle: {
  //   fontWeight: 'bold',
  // },
  // buttonContainer: {
  //   marginTop: 20,
  // },
  // input: {
  //   borderWidth: 1,
  //   borderColor: '#777',
  //   padding: 8,
  //   margin: 10,
  //   width: 200,
  // },
  // header: {
  //   backgroundColor: 'pink',
  //   padding: 20,
  // },
  // boldtext: {
  //   fontWeight: 'bold',
  // },
  // body: {
  //   backgroundColor: 'yellow',
  //   padding: 30,
  // },
  // boldbody: {
  //   fontWeight: "bold",
  // }