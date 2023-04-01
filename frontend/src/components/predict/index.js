import React, {useState} from 'react';
import './Predict.css';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import _ from "lodash";
import {v4} from "uuid";

const item = {
  id: v4(),
  name: "Clean the house",
  image: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c244980/virat-kohli.jpg"
}

const item2 = {
  id: v4(),
  name: "Wash the car",
  image: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c244982/rohit-sharma.jpg"
}

const item3 = {
  id: v4(),
  name: "Clean the house",
  image: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c244980/virat-kohli.jpg"
}

const item4= {
  id: v4(),
  name: "Wash the car",
  image: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c244982/rohit-sharma.jpg"
}

const item5 = {
  id: v4(),
  name: "Clean the house",
  image: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c244980/virat-kohli.jpg"
}

const item6 = {
  id: v4(),
  name: "Wash the car",
  image: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c244982/rohit-sharma.jpg"
}
const item7 = {
  id: v4(),
  name: "Clean the house",
  image: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c244980/virat-kohli.jpg"
}

const item8 = {
  id: v4(),
  name: "Wash the car",
  image: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c244982/rohit-sharma.jpg"
}

const item9 = {
  id: v4(),
  name: "Clean the house",
  image: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c244980/virat-kohli.jpg"
}

const item10 = {
  id: v4(),
  name: "Wash the car",
  image: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c244982/rohit-sharma.jpg"
}

const item11 = {
  id: v4(),
  name: "Clean the house",
  image: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c244980/virat-kohli.jpg"
}


function Predict() {
  const [text, setText] = useState("")
  const [state, setState] = useState({
    
    "Team-1": {
      title: "Team-1",
      items: []
    },
    "Players": {
        title: "Players",
        items: [item, item2,item3,item4,item5,item6,item7,item8,item9,item10,item11]
      },
    "done": {
      title: "Team-2",
      items: []
    },
  })

  const handleDragEnd = ({destination, source}) => {
    if (!destination) {
      return
    }

    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return
    }

    // Creating a copy of item before removing it from state
    const itemCopy = {...state[source.droppableId].items[source.index]}

    setState(prev => {
      prev = {...prev}
      // Remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1)


      // Adding to new items array location
      prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

      return prev
    })
  }

  // const addItem = () => {
  //   setState(prev => {
  //     return {
  //       ...prev,
  //       todo: { 
  //         title: "Todo",
  //         items: [
  //           {
  //             id: v4(),
  //             name: text
  //           },
  //           ...prev.todo.items
  //         ]
  //       }
  //     }
  //   })

  //   setText("")
  // }

  return (
    <div className="App">
      <DragDropContext onDragEnd={handleDragEnd}>
        {_.map(state, (data, key) => {
          return(
        
            <div key={key} className={"column"+key}>
                {/* {console.log(key)} */}
                {/* {console.log(data)} */}
              <h3>{data.title}</h3>
              <Droppable droppableId={key}>
                {(provided, snapshot) => {
                  return(
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={"droppable-col"}
                    >
                      {data.items.map((el, index) => {
                        return(
                          <Draggable key={el.id} index={index} draggableId={el.id}>
                            {(provided, snapshot) => {
                            //   console.log(snapshot)
                              return(
                                <div>
                                <div 
                                  className={`item ${snapshot.isDragging && "dragging"}`}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <div style={{float:"left"}}>{el.name}</div>
                                  <div style={{float:"right"}}><img src={el.image} alt="Lamp" width="20" height="20" /></div>
                                  
                                </div>
                                
                                </div>
                              )
                            }}
                          </Draggable>
                        )
                      })}
                      {provided.placeholder}
                    </div>
                  )
                }}
              </Droppable>
            </div>
          )
        })}
      </DragDropContext>
    </div>
  );
}

export default Predict;