import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { dragAndDrop } from "dragAndDrop"
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { dragAndDrop } from 'drag';

const predict = () => {
    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <ChakraProvider>
                    <dragAndDrop />
                </ChakraProvider>
            </DndProvider>
        </>
    )
}

export default predict;