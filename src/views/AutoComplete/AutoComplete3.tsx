import React, { useState } from "react";
import { AutoComplete } from "antd";

const { Option } = AutoComplete

const AutoComplete3: React.FC = () => {
    const [result, setResult] = useState<string[]>([])
    const handleSearch = (value: string) => {
        let res: string[] = []
        if (!value || value.indexOf('@') >= 0) {
            res = []
        } else {
            res = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`)
        }
        setResult(res)
    }

    return (
        <AutoComplete style={{ width: 200 }} onSearch={handleSearch} placeholder="input here">
            {result.map((email: string) => (
                <Option key={email} value={email}>
                    {email}
                </Option>
            ))}
        </AutoComplete>
    )
} 

export default AutoComplete3