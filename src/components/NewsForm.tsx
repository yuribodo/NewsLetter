import React, { useState, FormEvent } from 'react';
import jsonp from 'jsonp';
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';

// Configurar o Modal para se vincular ao elemento root do aplicativo
Modal.setAppElement('#root');

const NewsForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [modalMessage, setModalMessage] = useState<string>('');

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = 'https://gmail.us22.list-manage.com/subscribe/post?u=d4302f7d81d8ac03785ff3c1c&id=d4042ca44c&f_id=0029c8e1f0';
        jsonp(`${url}&EMAIL=${email}`, { param: 'c' }, (err, data) => {
            if (err) {
                console.error('Error:', err);
                setModalMessage('Ocorreu um erro ao enviar sua solicitação.');
                setModalIsOpen(true);
                return;
            }
            const { msg } = data;
            setModalMessage(msg);
            setModalIsOpen(true);
        });
    };

    return (
        <div className="p-4">
            <motion.form 
                onSubmit={onSubmit} 
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold mb-4">Inscreva-se na nossa Newsletter</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="EMAIL"
                    className="required email rounded-xl p-2 border border-gray-300 mb-4 w-full"
                    id="mce-EMAIL"
                    placeholder="Digite seu email"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Inscrever-se
                </button>
            </motion.form>
            <AnimatePresence>
                {modalIsOpen && (
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                        contentLabel="Mensagem de Inscrição"
                        className="fixed inset-0 flex items-center justify-center"
                        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
                        style={{ content: { padding: '0', border: 'none', background: 'transparent', overflow: 'visible' } }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto"
                        >
                            <h2 className="text-xl font-bold mb-4">Mensagem</h2>
                            <div className="mb-4">{modalMessage}</div>
                            <button
                                onClick={() => setModalIsOpen(false)}
                                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                            >
                                Fechar
                            </button>
                        </motion.div>
                    </Modal>
                )}
            </AnimatePresence>
        </div>
    );
}

export default NewsForm;
