import { Layout, Select, Space, Button, Modal, Drawer } from 'antd';
import { useCrypto } from '../../context/crypto-context';
import { useState, useEffect } from 'react';
import CoinInfoModal from '../CryptoIfoModal';
import AddAssetForm from '../AddAssetForm';

const headerStyle = {
    width: '100%',
    textAlign: 'center',
    height: 'px',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

};





export default function AppHeader() {

    const [select, setSelect] = useState(false);
    const [modal, setModal] = useState(false);
    const [coin, setCoin] = useState(null);
    const [drawer, setDrawer] = useState(false);

    const { crypto } = useCrypto();

    useEffect(() => {
        const keypress = (e) => {
            if (e.key === '/') {
                setSelect((prev) => !prev);
            }
        }
        document.addEventListener('keypress', keypress)
        return () => {
            document.removeEventListener('keypress', keypress)
        }
    }, [])

    const handleSelect = (value) => {
        setCoin(crypto.find((c) => c.id === value))
        setModal(true);
    }



    return (
        <Layout.Header style={headerStyle}>
            <Select

                style={{
                    width: 250,
                }}
                open={select}
                value='Press / to open'
                onSelect={handleSelect}
                onClick={() => setSelect((prev) => !prev)}
                options={crypto.map(coin => ({
                    label: coin.name,
                    value: coin.id,
                    key: coin.id,
                    icon: coin.icon,

                }))}
                optionRender={(option) => (
                    <Space>
                        <img style={{ width: 20 }} src={option.data.icon} alt={option.data.label} />{option.data.label}
                    </Space>
                )}
            />
            <Button type="primary" onClick={() => setDrawer(true)}>Add asset </Button>
            <Modal
                open={modal}
                onCancel={() => setModal(false)}
                footer={null}
            >
                <CoinInfoModal coin={coin} />
            </Modal>

            <Drawer width={600}
             title="Add Asset" 
             onClose={() => setDrawer(false)} open={drawer}
             destroyOnClose
             >
                <AddAssetForm onClose={()=> setDrawer(false)}/>
            </Drawer>
        </Layout.Header>
    )
}