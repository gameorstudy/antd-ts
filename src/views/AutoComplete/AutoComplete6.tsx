import React from "react";
import { Input, AutoComplete } from "antd";
import { UserOutlined } from '@ant-design/icons'

const renderTitle = (title: string) => (
    <span>
        {title}
        <a
            style={{ float: 'right' }}
            href="https://www.google.com/search?q=antd"
            target="_blank"
            rel="noopener noreference">
            more
        </a>
    </span>
)

const renderItem = (title: string, count: number) => ({
    value: title,
    label: (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
            {title}
            <span><UserOutlined /> {count}</span>
        </div>
    )
})

const options = [
    {
      label: renderTitle('Libraries'),
      options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
    },
    {
      label: renderTitle('Solutions'),
      options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
    },
    {
      label: renderTitle('Articles'),
      options: [renderItem('AntDesign design language', 100000)],
    },
];

const AutoComplete6 : React.FC = () => (
    <AutoComplete
        dropdownClassName="certain-catgory-search-dropdown"
        dropdownMatchSelectWidth={500}
        style={{ width: 250 }}
        options={options}
    >
        <Input.Search size="large" placeholder="input here" />
    </AutoComplete>
)

export default AutoComplete6