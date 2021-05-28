import { useState } from 'react'
import logoImg from '../../assets/dtmoney.svg'
import { Container, Content } from './style'

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export function Header(props: HeaderProps) {

    const { onOpenNewTransactionModal } = props

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
            </Content>
        </Container>
    )
}