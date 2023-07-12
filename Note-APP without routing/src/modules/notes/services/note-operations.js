import { Note } from "../models/note";
// Service - CRUD Logic
import dayjs from 'dayjs';
export const noteOperations = {
    notes:[],
    addNote(id, title, descr, cdate, importance){
        // const date = cdate ? cdate.toLocaleDateString('en-US') : '';
        const date = cdate ? dayjs(cdate).format('MM/DD/YYYY') : '';
        const noteObject = new Note(id, title, descr, date, importance);
        this.notes.push(noteObject);
        console.log('All notes are', this.notes);
        return noteObject;
    },
    getNotes(){
        return this.notes;
    }
}