/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Input, Select } from '@rocketseat/unform';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import * as Yup from 'yup';

import { Container, Card, Center } from './styles';
import DatePicker from '../../../components/DatePicker/index';
import * as CartActions from '../../../store/modules/plan/actions';

const options = [
    { id: 'Engenharia', title: 'Engenharia' },
    { id: 'Ferramentaria', title: 'Ferramentaria' },
    { id: 'Kaizen', title: 'Kaizen' },
    { id: 'Logística', title: 'Logística' },
    { id: 'Manutenção', title: 'Manutenção' },
    { id: 'Produção', title: 'Produção' },
    { id: 'Qualidade', title: 'Qualidade' },
    { id: 'RH', title: 'RH' },
    { id: 'Segurança', title: 'Segurança' },
];

const schema = Yup.object().shape({
    item: Yup.number().required(),
    problema: Yup.string().required(),
    auditor: Yup.string().required(),
    maquina: Yup.string().required(),
    setor: Yup.string().required(),
    acao: Yup.string(),
    responsavel: Yup.string(),
    data: Yup.date().required(),
    prazo: Yup.date(),
    conclusao: Yup.date(),
});

export default function CreatePlan() {
    const dispatch = useDispatch();

    const handleSubmit = data => {
        data.data = format(data.data, 'yyy/MM/dd', { locale: pt });
        dispatch(CartActions.addToPlanRequest(data));
    };
    const profile = useSelector(state => state.user.profile);
    const setor = useSelector(state => state.setor.setor);

    const auditoria = useSelector(state =>
        state.auditoria.map(question => ({
            ...question,
        }))
    );

    const initialData = {
        data: new Date(),
    };

    return (
        <Container>
            <header>
                <strong>PLANO DE AÇÃO</strong>
            </header>
            <Center>
                {auditoria.map(question => (
                    <Card key={question.item}>
                        <Form
                            id="planForm"
                            onSubmit={handleSubmit}
                            initialData={initialData}
                            schema={schema}
                        >
                            <content>
                                <Input name="item" value={question.item} />
                                <Input
                                    name="problema"
                                    placeholder="Descreva o problema"
                                />
                                <Input name="auditor" value={profile.name} />
                                <Input name="setor" value={setor.setor} />
                                <Input name="maquina" placeholder="maquina" />
                                <Input
                                    name="acao"
                                    placeholder="Ação corretiva se souber"
                                />

                                <DatePicker name="data" />

                                <Select
                                    name="cargo"
                                    placeholder="Escolha o resposavel"
                                    options={options}
                                />
                            </content>
                            <button type="submit">Enviar</button>
                        </Form>
                    </Card>
                ))}
            </Center>
        </Container>
    );
}
