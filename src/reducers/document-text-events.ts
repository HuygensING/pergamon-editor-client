interface IDocumentTextEvent {
	caretPosition: number;
	keyCode: number;
}

export default (state: IDocumentTextEvent[] = [], action) => {
	let nextState = state;

	switch (action.type) {
		case 'DOCUMENTS_UPDATE_TEXT': {
			const { caretPosition, keyCode } = action;
			nextState = nextState.concat({
				caretPosition,
				keyCode,
			});

			break;
		}

		case 'DOCUMENTS_REPLAY_TEXT_EVENTS': {
			nextState = [];
			break;
		}

		default:
	}

	return nextState;
};
