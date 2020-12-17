import { Container, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import BorderBottom from '../../../lib/components/Border';
import LoadingInfo from '../../../lib/components/LoadingInfo';
import { RootStateType } from '../../../store/rootReducer';
import { fetchExpertById } from '../store/expertsSlice';
import ExpertInfo from './ExpertInfo';
import ExpertMaterialsContainer from './ExpertMaterialsContainer';

const ExpertProfileView: React.FC = () => {
  const { expertId } = useParams<{ expertId: string }>();
  const {
    experts,
    meta: { loading },
  } = useSelector((state: RootStateType) => state.experts.experts);
  const dispatch = useDispatch();

  const selectedExpert = experts.find((e) => e.id === Number(expertId));

  useEffect(() => {
    dispatch(fetchExpertById(Number(expertId)));
  }, []);

  return (
    <Container>
      <Grid container direction="column" alignItems="center">
        <LoadingInfo loading={loading} />
      </Grid>
      {selectedExpert && <ExpertInfo expert={selectedExpert} />}
      <BorderBottom />
      <ExpertMaterialsContainer id={expertId} />
    </Container>
  );
};

export default ExpertProfileView;
