import { Grid, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import _ from 'lodash';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setExpertsRegionsFilter } from '../../modules/experts/store/expertsSlice';
import type { RootStateType } from '../../store/rootReducer';
import { ExpertRegionType } from '../types';

export interface ICheckedState {
  [key: string]: boolean;
};

export interface IFilterFormProps { }

export const RegionsFilter: React.FC<IFilterFormProps> = () => {
  const dispatch = useDispatch();
  const regions = useSelector(
    (state: RootStateType) => state.properties?.regions,
  );

  const initLocalState = () =>
    regions.reduce((acc: ICheckedState, next: ExpertRegionType) => {
      return { ...acc, [next.id.toString()]: true };
    }, {});

  const [checked, setChecked] = React.useState<ICheckedState>(initLocalState);
  const [allChecked, setAllChecked] = React.useState<boolean>(true);


  const setFiltersToStore = useCallback(
    _.debounce(() => {
      dispatch(
        setExpertsRegionsFilter({
          value: checked,
        }),
      );
    }, 500),
    [],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked({ ...checked, [event.target.id]: event.target.checked });
    setFiltersToStore();
  };

  const handleChangeAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkedTypes = _.mapValues(checked, () => event.target.checked);

    setChecked(checkedTypes);
    setAllChecked(event.target.checked);
    setFiltersToStore();
  };

  return (
    <>
      <Grid container style={{ paddingLeft: '30px', marginTop: '20px' }}>
        <Grid item xs={1}>
          <Typography variant="h5">Регіони:</Typography>
        </Grid>
        <Grid item xs={11}>
          <FormControlLabel
            style={{ width: '100%' }}
            control={
              <Checkbox
                id="All"
                checked={allChecked}
                onChange={handleChangeAll}
                name="All"
              />
            }
            label="Всі"
            key="All"
          />
        </Grid>
        <Grid item xs={1} />
        <FormGroup
          style={{
            height: '450px',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
          }}
        >
          {regions.map((region) => (
            <FormControlLabel
              style={{ width: '100%' }}
              control={
                <Checkbox
                  id={region.id.toString()}
                  checked={checked[region.id.toString()]}
                  onChange={handleChange}
                  name={region.name}
                />
              }
              label={region.name}
              key={region.id.toString()}
            />
          ))}
        </FormGroup>{' '}
      </Grid>
    </>
  );
};
