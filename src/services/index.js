import { getValue, setValue, removeValue } from './localStorage/localStorageService';
import { fetchCourseList, getCourseSelected, setCourseSelected } from './course/courseSelected';
import { fetchInscriptionsList, getInscriptionSelected, setInscriptionSelected } from './inscriptions/inscriptions';
import { fetchSections, getSectionSelected, setSectionSelected } from './sections/sections';
import { fetchCategories, getCategorySelected, setCategorySelected } from './categories/categories';
import { fetchResourcesList } from './resourses/resourses'

export { 
    getValue, 
    setValue, 
    removeValue, 
    fetchCourseList, 
    getCourseSelected, 
    setCourseSelected, 
    fetchInscriptionsList, 
    getInscriptionSelected, 
    setInscriptionSelected,
    fetchSections, 
    getSectionSelected, 
    setSectionSelected,
    fetchCategories,
    getCategorySelected,
    setCategorySelected,
    fetchResourcesList,
}