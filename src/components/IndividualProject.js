import React, {useState} from 'react'
import { FaTrashAlt as TrashIcon } from 'react-icons/fa'
import { useSelectedProjectValue, useProjectValue } from '../context'
import { firebase } from '../firebase'

export const IndividualProject = ({project}) => {

    const [showConfirm, setShowConfirm] = useState(false)
    const {projects, setProjects} = useProjectValue()
    const { setSelectedProject } = useSelectedProjectValue()

    const deleteProject = docId => {
        firebase
        .firestore()
        .collection('projects')
        .doc(docId)
        .delete()
        .then(() => {
            setProjects([...projects])
            setSelectedProject('INBOX')
        })
    }


    return (
        <>
            <span className="sidebar__dot">•</span>
            <span className="sidebar__project-name">{project.name}</span>
            <span className="sidebar__project-delete"
            data-testid="delete-project"
            role="button"
            onClick={() => setShowConfirm(!showConfirm)}
            >
                <TrashIcon />
                {showConfirm && (
                    <div className="project-delete-modal">
                        <div className="project-delete-modal__inner">
                            <p>Are you sure you want to delete this project?</p>
                            <button type="button"
                            onClick={() => deleteProject(project.docId)}
                            >
                                Delete
                            </button>
                            <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
                        </div>
                    </div>
                )}
            </span>
        </>
    )
}
