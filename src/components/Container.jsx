import { Box } from './Box';
import { Dustbin } from './Dustbin';
import { memo } from 'react';

export const Container = memo(function Container() {
  return (
    <div>
			<div style={{ overflow: 'hidden', clear: 'both', textAlign: 'center' }}>
				<Dustbin />
			</div>
			<div style={{ overflow: 'hidden', clear: 'both' }}>
				<Box name="Glass"/>
				<Box name="Banana"/>
				<Box name="Paper"/>
			</div>
		</div>
  );
});
