import * as React from 'react';
import {Column, ColumnBody, ColumnHeader} from "../columns";
import {HeadButton, Menu} from "../annotations/index";
import Tree from "./tree";
import Sunburst from "./sunburst";

class Visualisations extends React.Component<any, any> {
	public state = {
		filterSystemText: true,
		type: 'tree',
	};

	public render() {
		const {activateAnnotation, activeDocument} = this.props;
		const {filterSystemText} = this.state;

		return (
			<Column>
				<ColumnHeader value="Visualisations">
					<Menu>
						<HeadButton
							onClick={() => this.setState({type: 'tree'})}
							scale="0.5"
						>
							T
						</HeadButton>
						<HeadButton
							onClick={() => this.setState({type: 'sunburst'})}
							scale="0.5"
						>
							S
						</HeadButton>
						<HeadButton
							onClick={() => this.setState({filterSystemText: !filterSystemText})}
							scale="0.5"
						>
							F
						</HeadButton>
					</Menu>
				</ColumnHeader>
				<ColumnBody style={{display: 'flex'}}>
					{
						this.state.type === 'tree' ?
							<Tree
								activateAnnotation={activateAnnotation}
								activeDocument={activeDocument}
								filterSystemText={filterSystemText}
							/>	:
							<Sunburst
								activateAnnotation={activateAnnotation}
								activeDocument={activeDocument}
								filterSystemText={filterSystemText}
							/>
					}
				</ColumnBody>
			</Column>
		);
	}
}

export default Visualisations;
