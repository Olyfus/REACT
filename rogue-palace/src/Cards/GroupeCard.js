import config from '../Modules/config';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function MultipleSelectNative() {

  const [personName, setPersonName] = config.useState([]);

  const handleChangeMultiple = (event) => {

    const { options } = event.target;

    const value = [];

    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  return (
    <div>
      <config.FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }} className="groupcard">
        <config.InputLabel shrink htmlFor="select-multiple-native">
          Native
        </config.InputLabel>
        <config.Select
          multiple
          native
          value={personName}
          // @ts-ignore Typings are not considering `native`
          onChange={handleChangeMultiple}
          label="Native"
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </config.Select>
      </config.FormControl>
    </div>
  );
}