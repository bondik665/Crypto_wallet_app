
import { Flex, Tag, Typography, Divider } from 'antd';

export default function CoinInfoModal({ coin }) {
    return (
        <>
            <Flex align='center'>
                <img src={coin.icon} alt={coin.name} style={{ width: 40, marginRight: 20 }} />
                <Typography.Title level={2} style={{ margin: 0 }}>
                    ({coin.symbol}) {coin.name}

                </Typography.Title>
            </Flex>
            <Divider />
            <Typography.Paragraph style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography.Text strong >
                    1 hour:
                    <Tag style={{ marginLeft: 10 }} color={coin.priceChange1h > 0 ? 'green' : 'red'}>{coin.priceChange1h}%</Tag>
                </Typography.Text>
                <Typography.Text strong>
                    1 day:
                    <Tag style={{ marginLeft: 10 }} color={coin.priceChange1d > 0 ? 'green' : 'red'}>{coin.priceChange1d}%</Tag>
                </Typography.Text>
                <Typography.Text strong>
                    1 week:
                    <Tag style={{ marginLeft: 10 }} color={coin.priceChange1w > 0 ? 'green' : 'red'}>{coin.priceChange1w}%</Tag>
                </Typography.Text>

            </Typography.Paragraph>
            <Typography.Paragraph strong>
                Price:{coin.price.toFixed(2)}$
            </Typography.Paragraph>
            <Typography.Paragraph strong>
                PriceBTC:{coin.priceBtc}
            </Typography.Paragraph>
            <Typography.Paragraph strong>
                Market Cap:{coin.marketCap}$
            </Typography.Paragraph>
            {coin.contractAddress && (
                <Typography.Paragraph strong>
                    Address:{coin.contractAddress}
                </Typography.Paragraph>
            )}
        </>
    )
}