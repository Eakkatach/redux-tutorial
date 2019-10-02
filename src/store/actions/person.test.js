import update_person, {UPDATE_NAME} from './personActions'

describe('actions', () =>{
  it('Should return the action for person', () => {
    const expectedAction = {
      type: UPDATE_NAME,
      payload: 'bitfumes'
    }
    expect(update_person).toEqual(expectedAction)
  })
})
