import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = ({monsters}) => (
	<div className={'card-list'}>
		{monsters.map((m) => (
			<Card key={m.id} monster={m} />
		))}
	</div>
);