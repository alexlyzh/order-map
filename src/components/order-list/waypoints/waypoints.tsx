import './waypoints.css';
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { getLocations } from '../../../store/reducer/data-reducer/selectors';

type Props = {
  name: string,
  currentOrderName: string,
  source: string,
  destination: string,
  onSourceChange: (value: string) => void,
  onDestinationChange: (value: string) => void,
}

export default function Waypoints(props: Props): JSX.Element {
  const {name, currentOrderName, source, destination, onSourceChange, onDestinationChange} = props;
  const locations = useSelector(getLocations);

  return (
    <div className="waypoints">
      <div>
        <p className="text--secondary">Source</p>
        <Select
          className="select"
          placeholder={'Select source'}
          defaultValue={source}
          disabled={name !== currentOrderName}
          onSelect={onSourceChange}
          onClick={(evt) => evt.stopPropagation()}
        >
          {locations.map(({name: locationName}) => (
            <Select.Option key={`${locationName}-source`} value={locationName}>
              {locationName}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div>
        <p className="text--secondary">Destination</p>
        <Select
          className="select"
          placeholder={'Select destination'}
          defaultValue={destination}
          disabled={name !== currentOrderName}
          onSelect={onDestinationChange}
          onClick={(evt) => evt.stopPropagation()}
        >
          {locations.map(({name: locationName}) => (
            <Select.Option key={`${locationName}-destination`} value={locationName}>
              {locationName}
            </Select.Option>
          ))}
        </Select>
      </div>
    </div>
  );
}
