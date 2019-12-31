import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistedReducer = persistReducer(
        {
            key: 'auditoriaescalonada',
            storage,
            whitelist: ['auth', 'user', 'auditoria', 'setor'],
        },
        reducers
    );
    return persistedReducer;
};
