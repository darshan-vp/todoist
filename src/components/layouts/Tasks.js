import React, {useState, useEffect} from 'react'
import {Checkbox} from '../Checkbox'
import {useTask} from '../../hooks'
import {collatedTasks} from '../../constants'
import { getTitle, getCollatedTitle, collatedTasksExist } from '../../helpers'
import { useSelectedProjectValue, useProjectValue } from '../../context'

export const Tasks = () => {
    const {selectedProject} = useSelectedProjectValue()
    const {projects} = useProjectValue()
    const {tasks} = useTask(selectedProject)
    let projectName = ''

    if (projects &&  selectedProject && !collatedTasksExist(selectedProject)) {
        projectName = getTitle(projects, selectedProject).name
        console.log('projectName')
    }

    if (collatedTasksExist(selectedProject) && selectedProject) {
        projectName = getCollatedTitle(collatedTasks, selectedProject).name
    }

    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="project-name">{projectName}</h2>
            <ul className="tasks__list">
                {tasks.map(task => (
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
