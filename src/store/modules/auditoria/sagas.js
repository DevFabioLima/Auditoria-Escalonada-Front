import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import history from '~/services/history';
import {
    addToQuestionSucess,
    addAuditoriaSuccess,
    addAuditoriaFailure,
} from './actions';

function* addToQuestion({ id }) {
    const response = yield call(api.get, `/questions/${id}`);
    const data = {
        ...response.data,
    };
    yield put(addToQuestionSucess(data));

    toast.warn('Novo plano de ação será aberto');
}
function* addToAuditoria({ auditoria_id, cargo }) {
    const status = 'Realizado';
    const dataAtual = new Date();
    const data = format(dataAtual, 'yyyy/MM/dd', { locale: pt });

    if (cargo === 'Operador') {
        try {
            const response = yield call(api.put, `/auditoria/${auditoria_id}`, {
                status,
            });
            toast.success('Auditoria Realizado com sucesso');
            yield put(addAuditoriaSuccess(response.data));
            history.push('/operador');
        } catch (err) {
            toast.error('Error auditoria');
            yield put(addAuditoriaFailure());
        }
    } else {
        try {
            const response = yield call(api.put, `/auditoria/${auditoria_id}`, {
                status,
                data,
            });
            toast.success('Auditoria Realizado com sucesso');
            yield put(addAuditoriaSuccess(response.data));
            history.push('/main');
        } catch (err) {
            toast.error('Error auditoria');
            yield put(addAuditoriaFailure());
        }
    }
}

export default all([
    takeLatest('@question/ADD_REQUEST', addToQuestion),
    takeLatest('@auditoria/ADD_REQUEST', addToAuditoria),
]);
